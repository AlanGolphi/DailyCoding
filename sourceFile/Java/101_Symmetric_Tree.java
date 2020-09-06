/*
 * @Author: AlanGolphi
 * @Date: 2020-09-06 23:20:08
 * @LastEditTime: 2020-09-06 23:32:49
 */
class Solution {
    public boolean isSymmetric(TreeNode root) {
        return check(root, root);
    }
    public boolean check(TreeNode p1, TreeNode p2) {
        if (p1 == null && p2 == null) return true;
        if (p1 == null || p2 == null) return false;
        return(p1.val == p2.val && check(p1.left, p2.right) && check(p1.right,p2.left));
    }
}

//递归法，判断一棵树的左节点是否等于右节点
//会报不知名的错 ：java.lang.NullPointerException
//仔细检查过了，一样的代码，先挖个坑，以后慢慢看看。